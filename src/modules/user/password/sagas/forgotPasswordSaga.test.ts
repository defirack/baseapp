it('deprecated: saga, reducer, components with redux are tested separatelly', () => {
    expect(true).toBeTruthy();
});

// import MockAdapter from 'axios-mock-adapter';
// import { MockStoreEnhanced } from 'redux-mock-store';
// import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
// import { rootSaga } from '../../..';
// import { mockNetworkError, setupMockAxios, setupMockStore } from '../../../../helpers/jest';
// import { forgotPassword, forgotPasswordError, forgotPasswordSuccess } from '../actions';


// describe('FORGOT PASSWORD SAGA', () => {
//     let store: MockStoreEnhanced;
//     let sagaMiddleware: SagaMiddleware<{}>;
//     let mockAxios: MockAdapter;

//     beforeEach(() => {
//         mockAxios = setupMockAxios();
//         sagaMiddleware = createSagaMiddleware();
//         store = setupMockStore(sagaMiddleware, false)();
//         sagaMiddleware.run(rootSaga);
//     });

//     afterEach(() => {
//         mockAxios.reset();
//     });

//     const fakeError = {
//         code: 422,
//         message: ['User doesn\'t exist or has already been activated'],
//     };

//     const fakeNetworkError = {
//         code: 500,
//         message: ['Server error'],
//     };

//     const fakeRequest =  {
//         email: 'test@test.com',
//     };

//     const mockForgotPassword = () => {
//         mockAxios.onPost('/identity/users/password/generate_code').reply(200);
//     };

//     const mockForgotPasswordError = () => {
//         mockAxios.onPost('/identity/users/password/generate_code').reply(422, {
//             error: 'User doesn\'t exist or has already been activated',
//         });
//     };

//     const expectedActionsFetch = [forgotPassword(fakeRequest), forgotPasswordSuccess()];
//     const expectedActionsNetworkError = [forgotPassword(fakeRequest), forgotPasswordError(fakeNetworkError)];
//     const expectedActionsError = [forgotPassword(fakeRequest), forgotPasswordError(fakeError)];

//     it('should request forgotten password in success flow', async () => {
//         mockForgotPassword();
//         const promise = new Promise(resolve => {
//             store.subscribe(() => {
//                 const actions = store.getActions();
//                 if (actions.length === expectedActionsFetch.length) {
//                     expect(actions).toEqual(expectedActionsFetch);
//                     resolve();
//                 }
//             });
//         });

//         store.dispatch(forgotPassword(fakeRequest));

//         return promise;
//     });

//     it('should request forgotten password in error flow', async () => {
//         mockForgotPasswordError();
//         const promise = new Promise(resolve => {
//             store.subscribe(() => {
//                 const actions = store.getActions();
//                 if (actions.length === expectedActionsError.length) {
//                     expect(actions).toEqual(expectedActionsError);
//                     resolve();
//                 }
//             });
//         });

//         store.dispatch(forgotPassword(fakeRequest));

//         return promise;
//     });

//     it('should request forgotten password in network error', async () => {
//         mockNetworkError(mockAxios);
//         const promise = new Promise(resolve => {
//             store.subscribe(() => {
//                 const actions = store.getActions();
//                 if (actions.length === expectedActionsNetworkError.length) {
//                     expect(actions).toEqual(expectedActionsNetworkError);
//                     resolve();
//                 }
//             });
//         });
//         store.dispatch(forgotPassword(fakeRequest));

//         return promise;
//     });
// });
