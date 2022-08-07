//this file calls one of the five hooks shown using props from _webApi

import { handler as createAccountHook } from './useAccount';
import { handler as createNetworkHook } from './useNetwork';
import { handler as createOwnedCoursesHook } from './useOwnedCourses';
import { handler as createOwnedCourseHook } from './useOwnedCourse';
import { handler as createManagedCoursesHook } from './useManagedCourses';

export const setupHooks = ({ web3, provider, contract }) => {
  // console.log('Setting up hooks!');
  return {
    useAccount: createAccountHook(web3, provider),
    useNetwork: createNetworkHook(web3),
    useOwnedCourses: createOwnedCoursesHook(web3, contract),
    useOwnedCourse: createOwnedCourseHook(web3, contract),
    useManagedCourses: createManagedCoursesHook(web3, contract),
  };
};
