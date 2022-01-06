import React, { useCallback } from 'react';
import Header from '../../components/Header';
import PageWrapper from '../../components/PageWrapper';
import { Form, FormWrapper, Input, Label, Button, LabelWrapper, LateralFoto, Wrapper, ButtonWrapper } from './styles';

const Login: React.FC = () => {

    const executeFunction = useCallback(() => {
        alert('logou');
    }, [])

    return (
        <PageWrapper>
            <Wrapper>
                <LateralFoto>
                    <Header fixed={true} />
                </LateralFoto>
                <FormWrapper>
                    <Form action=''>
                        <LabelWrapper>
                            <Label htmlFor=""> Email
                                <Input type="email" />
                            </Label>
                        </LabelWrapper>
                        <LabelWrapper>
                            <Label htmlFor=""> Senha
                                <Input type="password" />
                            </Label>
                        </LabelWrapper>
                        <ButtonWrapper>
                            <Button onClick={() => executeFunction()} color='red' title="Oi">Entrar</Button>
                        </ButtonWrapper>
                    </Form>
                </FormWrapper>
            </Wrapper>
        </PageWrapper>
    )
}

export default Login;