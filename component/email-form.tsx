import * as Inputs from './input'
import React, { FormEventHandler, useCallback, useMemo, useState } from 'react'
import { Body } from './typography';

interface EmailFormProps {
    id?: string
}

interface FormDataShape {
    name: string,
    email: string,
}

const getFormData = (
    formId: string
): {name: string, email: string} | null => {
    const form = document.forms.namedItem(formId);

    if(!form) {
        return null;
    }

    const data = new FormData(form)

    const email = data.get('email');
    const name = data.get('name');

    if(typeof email !== 'string' || typeof name !== 'string') {
        return null;
    }

    return {
        name,
        email,
    }
}

const confettiParams = {
    confettiRadius: 10,
    confettiNumber: 500,
    confettiColors: [
        '#f6e58d', '#ffbe76', '#ff7979', '#badc58', '#7ed6df', '#e056fd', '#686de0',
      ],
}

const STORAGE_KEY = 'typeerror-subbed';

const isSubbed = (): boolean => {
    if(!window.localStorage) {
        return false;
    }

    const subbed = window.localStorage.getItem(STORAGE_KEY);

    return subbed === 'true';
}

const setSubbed = () => {
    if(!window.localStorage) {
        return;
    }

    window.localStorage.setItem(STORAGE_KEY, 'true');
}

export const EmailForm: React.FC<EmailFormProps> = ({id = "email-form"}) => {
    const [confetti, setConfetti] = useState<any>(null);
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const [showLoading, setShowLoading] = useState<boolean>(false);


    const alreadySubbed = useMemo(() => typeof window !== 'undefined' && isSubbed(), []);

    const fireConfetti = useCallback(async () => {
        if(!confetti) {
            const Confetti = (await import('js-confetti')).default;
            const _confetti = new Confetti();
            setConfetti(_confetti);
            _confetti.addConfetti(confettiParams);
            return;
        }

        confetti.addConfetti(confettiParams);

    }, [confetti])

    const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>((evt) => {
        setShowLoading(true)
        setShowError(false)
        evt.preventDefault()
        const data = getFormData(id)


        fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => {

            if(res.status === 200) {
                setSubbed();
                setShowSuccess(true);
                return fireConfetti();
            } else {
                setShowError(true);
                return Promise.resolve()
            }


        }).catch(() => {
            setShowError(true)
        }).finally(() => {
            setShowLoading(false)
        }) 
    }, []);


    if(alreadySubbed) {
        return null;
    }

    return (
        <Inputs.FormWrapper>
            <Inputs.Form id={id} onSubmit={handleSubmit}>
                {showSuccess && (
                    <Inputs.SuccessMessageWrapper>
                        <Inputs.SuccessMessage onClick={fireConfetti}>
                            <img src="https://i.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.webp" />
                        party time, check your email to confirm your subscription
                        </Inputs.SuccessMessage>
                    </Inputs.SuccessMessageWrapper>
                )}

                <Body>
                    If you enjoyed this article why not subscribe to be notified of future posts
                </Body>

                <Inputs.InputWrap>
                    <Inputs.Input
                        name="name"
                        id="name"
                        type="text"
                        required
                        placeholder="Name"
                        disabled={showLoading}
                    />
                </Inputs.InputWrap>
                <Inputs.InputWrap>
                    <Inputs.Input
                        name="email"
                        id="email"
                        placeholder="Email"
                        type="email"
                        required 
                        disabled={showLoading}
                    />
                </Inputs.InputWrap>

                <Inputs.ButtonWrap>
                    <Inputs.SubmitButton disabled={showLoading}>
                        {showLoading ? "Subscribing..." : "Subscribe!"}
                        
                    </Inputs.SubmitButton>
                </Inputs.ButtonWrap>

                {showError && (
                    <Inputs.FormError>
                        uh oh, that didnt seem to work. I must have broken something...
                    </Inputs.FormError>
                )}

            </Inputs.Form>
        </Inputs.FormWrapper>

    )
}   