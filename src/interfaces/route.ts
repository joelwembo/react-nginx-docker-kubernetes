export default interface IRoute {
    path: string;
    exact: boolean;
    component: any;
    name: string;
    props?: any;
    protected: boolean;

}