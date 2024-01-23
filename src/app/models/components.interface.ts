export type PriorityType = 'HIGH' | 'MEDIUM' | 'LOW';
export type StatusType = 'COMPLETED' | 'PENDING' | 'PROGRESS';

export interface ITask {
	priority: PriorityType;
	task: string;
	status: StatusType;
}

export interface IStatus {
	key: StatusType;
	text: string;
}

export interface IPriority {
	key: PriorityType;
	text: string;
}
