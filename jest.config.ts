import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    "transform": {
        "\\.(ts|tsx)$": "ts-jest"
    },
    "setupFiles": [
        "<rootDir>/tests/helpers/setup.ts"
    ]
};

export default config;
