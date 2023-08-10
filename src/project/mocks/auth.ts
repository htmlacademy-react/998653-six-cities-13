import { faker } from '@faker-js/faker';
import { AuthorizationStatus } from '../const/const';

export const mockAuthStatus = () => faker.datatype.boolean() ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth;
