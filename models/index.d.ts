import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerBlankForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BlankForm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly websiteIfOwned?: string | null;
  readonly phoneNumber?: number | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly questions?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlankForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BlankForm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly websiteIfOwned?: string | null;
  readonly phoneNumber?: number | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly questions?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BlankForm = LazyLoading extends LazyLoadingDisabled ? EagerBlankForm : LazyBlankForm

export declare const BlankForm: (new (init: ModelInit<BlankForm>) => BlankForm) & {
  copyOf(source: BlankForm, mutator: (draft: MutableModel<BlankForm>) => MutableModel<BlankForm> | void): BlankForm;
}

type EagerPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly authorsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly authorsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Posts = LazyLoading extends LazyLoadingDisabled ? EagerPosts : LazyPosts

export declare const Posts: (new (init: ModelInit<Posts>) => Posts) & {
  copyOf(source: Posts, mutator: (draft: MutableModel<Posts>) => MutableModel<Posts> | void): Posts;
}

type EagerAuthors = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Authors, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly Posts?: (Posts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthors = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Authors, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly Posts: AsyncCollection<Posts>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Authors = LazyLoading extends LazyLoadingDisabled ? EagerAuthors : LazyAuthors

export declare const Authors: (new (init: ModelInit<Authors>) => Authors) & {
  copyOf(source: Authors, mutator: (draft: MutableModel<Authors>) => MutableModel<Authors> | void): Authors;
}