import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { ErrMessage, StyledForm, Group, Button } from './SearchForm.styled';

const quizSchema = Yup.object().shape({
    serch: Yup.string(),
});

export const SearchForm = ({ onChangeSerch }) => {
    return (
        <Formik
            initialValues={{
                serch: ''
            }}
            validationSchema={quizSchema}
            onSubmit={(values, actions) => {
                console.log("form - ", values.serch)
                onChangeSerch(values.serch);
            }}
        >
            <StyledForm>
                <Group>
                    Serch
                    <Field name="serch" />
                    <ErrMessage name="serch" component="div" />
                </Group>

                <Button type="submit">Serch</Button>
            </StyledForm>
        </Formik>
    );
};