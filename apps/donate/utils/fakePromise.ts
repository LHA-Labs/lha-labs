import { useQuery } from '@tanstack/react-query';

/**
 * this function generates a random number in range [0,9[
 *
 * @returns {number} a random number
 */
export function random() {
  return Math.floor(Math.random() * 10);
}

export function fakePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const generatedRandomNumber = random();
      if (generatedRandomNumber > 0 && generatedRandomNumber < 9)
        resolve('success');
      reject('Failed');
    }, 3000);
  });
}

export function useUserData() {
  return useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      fakePromise()
        .then(() => {
          return { first_name: 'hello', last_name: 'string' };
        })
        .catch(() => 'Something went wrong! Please try again...'),
  });
}
