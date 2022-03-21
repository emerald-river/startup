import {useRef, useEffect} from "react";

export const VALID_CHARS = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;

export interface randomIdSettings {
	randomPrefix?: string;
	randomGroups?: number;
	randomLength?: number;
}

export const getRandomId = (settings?: randomIdSettings) => {
	let prefix = settings?.randomPrefix ?? "devxp-resource-";
	const groups = settings?.randomGroups ?? 1;
	const length = settings?.randomLength ?? 4;

	for (let i = 0; i < groups; i++) {
		for (let j = 0; j < length; j++) {
			prefix = `${prefix}${VALID_CHARS.charAt(
				Math.floor(Math.random() * VALID_CHARS.length)
			)}`;
		}
		prefix = `${prefix}-`;
	}

	return prefix.slice(0, -1);
};

export const usePrevious = <T extends unknown>(value: T): T | undefined => {
	const ref = useRef<T>();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
};