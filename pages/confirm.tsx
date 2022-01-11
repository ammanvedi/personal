import * as Inputs from '../component/input'
import * as Layout from '../component/layout'
export default function Confirm() {
    return (
        <Layout.Layout>
            
            <Inputs.SuccessMessageWrapper>

                <Inputs.SuccessMessage >
                    <Layout.PostHeader dangerouslySetInnerHTML={{__html: Layout.HEADER_TEXT}} />
                    <img src="https://i.giphy.com/media/3oEjHFOscgNwdSRRDy/giphy.webp" />
                    e-mail confirmed! welcome to the club!
                </Inputs.SuccessMessage>
            </Inputs.SuccessMessageWrapper>
        </Layout.Layout>

    )
}