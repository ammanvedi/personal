import 'styled-components';

type PxValue = `${number}px`;
type HexValue = `#${string}`;

type MQ = {
    p: PxValue,
    t: PxValue,
    d: PxValue,
    m: PxValue,
}

type Colors = {
    text: HexValue;
    textLight: HexValue;
    link: HexValue;
    white: HexValue;
    success: HexValue;
    failure: HexValue;
};

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Colors,
        mq: MQ
    }
}