import {BindingKey, MetadataAccessor} from '@loopback/core';
import {
  FeatureFlagFn,
  FeatureFlagMetadata,
  FeatureInterface,
  IToggleServiceConfig,
} from './types';
import {Unleash} from 'unleash-client';
import {BINDING_PREFIX} from '@sourceloop/core';

export namespace StrategyBindings {
  export const FEATURE_FLAG_ACTION = BindingKey.create<FeatureFlagFn>(
    'sf.featureflag.actions.toggle',
  );
  export const METADATA = BindingKey.create<FeatureFlagMetadata | undefined>(
    'sf.featuresFlag.operationsMetadata',
  );
  export const TENANT_FEATURE =
    BindingKey.create<FeatureInterface>('sf.tenant.feature');
  export const USER_FEATURE =
    BindingKey.create<FeatureInterface>('sf.user.feature');
  export const SYSTEM_FEATURE =
    BindingKey.create<FeatureInterface>('sf.system.feature');
}

export const FEATURE_FLAG_METADATA_ACCESSOR = MetadataAccessor.create<
  FeatureFlagMetadata,
  MethodDecorator
>('sf.featuresFlag.accessor.operationsMetadata');

export const UNLEASH_CONST = BindingKey.create<Unleash>('unleash.const');

export namespace ToggleServiceBindings {
  export const Config = BindingKey.create<IToggleServiceConfig | null>(
    `${BINDING_PREFIX}.auth.config`,
  );
}
