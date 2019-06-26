export interface IAction {
    type: string;
    payload: any;
}

interface IDeferred {
    resolve: () => void;
    reject: () => void;
}

export interface ActionWithDeferred {
    type: string;
    payload: any;
    deferred: IDeferred;
}
