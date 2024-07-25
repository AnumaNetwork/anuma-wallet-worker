export * from '@anuma-network/wallet/types/rpc';

import {RPC} from '@anuma-network/wallet/types/rpc';

export interface SubscriberItem{
  uid:string;
  callback:function;
}

export declare type SubscriberItemMap = Map<string, SubscriberItem[]>;
