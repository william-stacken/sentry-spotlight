import { IntegrationTab } from '../../integration';

export declare function createTab<T>(id: string, title: string, extra?: Partial<Omit<IntegrationTab<T>, 'id' | 'title'>>): IntegrationTab<T>;
