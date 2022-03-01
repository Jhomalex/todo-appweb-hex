import { TasklistName } from '@/app/tasklist/core/domain/entity/properties/TasklistName';
import { TasklistEntity } from '@/app/tasklist/core/domain/entity/TasklistEntity';
import {
	createTasklistInteractor,
	listTasklistInteractor,
} from '@/app/tasklist/core/usesCases';
import { readonly, Ref, ref } from 'vue';

const tasklistList = ref([]) as Ref<TasklistEntity[]>;
const tasklistSelected = ref({}) as Ref<TasklistEntity>;

export const tasklistStore = () => {
	const list = async () => {
		const res = await listTasklistInteractor.run();
		tasklistList.value = res;
	};

	const setTasklistSelected = (tasklist: TasklistEntity) => {
		tasklistSelected.value = tasklist;
	};

	const create = async (name: TasklistName) => {
		const tasklist = await createTasklistInteractor.run(name);
		tasklistList.value.push(tasklist);
	};

	return {
		tasklistList: readonly(tasklistList),
		tasklistSelected: readonly(tasklistSelected),
		list,
		setTasklistSelected,
		create,
	};
};
