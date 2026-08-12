declare const _default: () => {
    port: number;
    database: {
        host: string | undefined;
        port: number;
        user: string | undefined;
        password: string | undefined;
        name: string | undefined;
    };
    jwt: {
        secret: string;
        expiresIn: string;
    };
};
export default _default;
