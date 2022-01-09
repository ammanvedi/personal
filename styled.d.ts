import 'styled-components';

type PxValue = `${number}px`;
type HexValue = `#${string}`;

type MQ = {
    t: PxValue,
    d: PxValue,
}

type Colors = {
    text: HexValue;
    link: HexValue;
};

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Colors,
        mq: MQ
    }
}