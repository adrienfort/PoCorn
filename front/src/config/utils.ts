import { get } from 'env-var';

const env = (name: string, required = true) => get(name).required(required);

export default env;
