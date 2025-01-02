import { Address } from 'viem';
import { publicClient } from '../utils/connect';
import Greeter from '../abi/Greeter.json';

export const getUserPoints = ({
  userAddress,
  pointsAddress,
}: {
  userAddress: Address;
  pointsAddress: Address;
}) => {
  const points = publicClient.readContract({
    address: pointsAddress,
    functionName: 'getPoints',
    args: [userAddress],
    abi: BaalPoints,
  });

  return points;
};
