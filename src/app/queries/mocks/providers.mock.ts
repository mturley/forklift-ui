import { IVMwareProvider, IOpenShiftProvider, IProvidersByType } from '../types/providers.types';
import { ProviderType } from '@app/common/constants';

export let MOCK_PROVIDERS: IProvidersByType = {
  [ProviderType.vsphere]: [],
  [ProviderType.openshift]: [],
};

// TODO put this condition back when we don't directly import mocks into components anymore
// if (process.env.NODE_ENV === 'test' || process.env.DATA_SOURCE === 'mock') {
const vmwareProvider1: IVMwareProvider = {
  uid: 'foo-uid',
  version: '12345',
  namespace: 'openshift-migration',
  name: 'VCenter1',
  selfLink: '/foo/bar',
  type: ProviderType.vsphere,
  object: {
    apiVersion: '12345',
    kind: 'foo-kind',
    metadata: {
      name: 'VCenter1',
      namespace: 'openshift-migration',
      selfLink: '/foo/bar',
      uid: 'foo-uid',
      resourceVersion: '12345',
      generation: 1,
      creationTimestamp: '2020-08-21T18:36:41.468Z',
    },
    spec: {
      type: ProviderType.vsphere,
      url: 'vcenter.v2v.bos.redhat.com',
      secret: {
        namespace: 'openshift-migration',
        name: 'boston',
      },
    },
    status: {
      conditions: [
        {
          type: 'Ready',
          status: true,
          category: 'Required',
          message: 'The provider is ready.',
          lastTransitionTime: '2020-08-21T18:36:41.468Z',
          reason: '',
        },
      ],
      observedGeneration: 1,
    },
  },
  datacenterCount: 1,
  clusterCount: 2,
  hostCount: 15,
  vmCount: 41,
  networkCount: 8,
  datastoreCount: 3,
};

const vmwareProvider2: IVMwareProvider = {
  ...vmwareProvider1,
  name: 'VCenter2',
  object: {
    ...vmwareProvider1.object,
    metadata: {
      ...vmwareProvider1.object.metadata,
      name: 'VCenter2',
    },
  },
};

const vmwareProvider3: IVMwareProvider = {
  ...vmwareProvider1,
  name: 'VCenter3',
  object: {
    ...vmwareProvider1.object,
    metadata: {
      ...vmwareProvider1.object.metadata,
      name: 'VCenter3',
    },
  },
};

const openshiftProvider1: IOpenShiftProvider = {
  ...vmwareProvider1,
  name: 'OCPv_1',
  object: {
    ...vmwareProvider1.object,
    metadata: {
      ...vmwareProvider1.object.metadata,
      name: 'OCPv_1',
    },
    spec: {
      ...vmwareProvider1.object.spec,
      type: ProviderType.openshift,
      url: 'https://my_OCPv_url',
    },
  },
  namespaceCount: 41,
  vmCount: 26,
  networkCount: 8,
};

const openshiftProvider2: IOpenShiftProvider = {
  ...openshiftProvider1,
  name: 'OCPv_2',
  object: {
    ...openshiftProvider1.object,
    metadata: {
      ...openshiftProvider1.object.metadata,
      name: 'OCPv_2',
    },
  },
};

const openshiftProvider3: IOpenShiftProvider = {
  ...openshiftProvider1,
  name: 'OCPv_3',
  object: {
    ...openshiftProvider1.object,
    metadata: {
      ...openshiftProvider1.object.metadata,
      name: 'OCPv_3',
    },
  },
};

MOCK_PROVIDERS = {
  [ProviderType.vsphere]: [vmwareProvider1, vmwareProvider2, vmwareProvider3],
  [ProviderType.openshift]: [openshiftProvider1, openshiftProvider2, openshiftProvider3],
};
// }
