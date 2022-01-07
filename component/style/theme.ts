import {DefaultTheme} from "styled-components";
import {MQ} from "../../styled";

export const theme: DefaultTheme = {
    colors: {
        text: '#212121'
    },
    mq: {
        t: '768px',
        d: '1024px'
    }
}

interface InterpolationProps {
    theme: DefaultTheme
}

export const getMq = (mq: keyof MQ) => (props: InterpolationProps): string => {
    return props.theme.mq[mq]
}