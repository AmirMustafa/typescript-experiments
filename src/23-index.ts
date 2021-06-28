interface ErrorContainer {
    id: string;
    [props:string]: string;
}


let errorBag:ErrorContainer;

errorBag = {
    id: 'd14',
    email: 'Not a valid email!',
    contact: 'Not a valid number!'
};