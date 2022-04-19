import { generatePassword } from '$lib/utils';
import { user } from './init';

export const createUser = (userName: string) => {
	const password = generatePassword();
	user.create(
		userName,
		password,
		({ pub, err }: { ok: 0; pub: string; err: string }) => {
			if (err) {
				console.error(err);
			} else {
				console.info(`User ${userName} created with pub ${pub}`);
			}
		}
	);
};
