import { useRouter } from 'vue-router';

export const useVRouter = () => {
	const router = useRouter();
	const go = (name: string) => {
		router.push({ name });
	};

	return {
		go,
	};
};
