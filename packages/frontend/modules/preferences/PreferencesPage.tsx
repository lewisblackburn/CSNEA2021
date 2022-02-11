import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {Textarea} from '@components/Form/Textarea';
import {notify} from '@components/Notify';
import {useVerifyLoggedIn} from '@modules/auth/useVerifyLoggedIn';
import {PreferencesLayout} from '@modules/layouts/PreferenceLayout';
import {Form, Formik, FormikHelpers} from 'formik';
import {PreferencesDocument, usePreferencesQuery, useUpdateUserMutation} from 'generated/graphql';
import {useRouter} from 'next/router';
import React from 'react';

interface Values {
	email: string;
	username: string;
	displayname: string;
	bio: string;
	location: string;
	website: string;
	dob: any;
}

export const PreferencesPage: React.FC = () => {
	useVerifyLoggedIn();

	const router = useRouter();

	const {data: preferences} = usePreferencesQuery();
	const [updateUser] = useUpdateUserMutation({
		refetchQueries: [PreferencesDocument],
	});

	if (preferences?.me) {
		return (
			<PreferencesLayout>
				<Formik
					initialValues={{
						email: preferences.me.email ?? '',
						username: preferences?.me?.username ?? '',
						displayname: preferences?.me?.displayname ?? '',
						bio: preferences?.me?.bio ?? '',
						location: preferences?.me?.location ?? '',
						website: preferences?.me?.website ?? '',
						dob: new Date(preferences?.me?.dob ?? 0).toISOString().split('T')[0] ?? 0,
					}}
					onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
						setSubmitting(true);
						await updateUser({
							variables: {
								data: {
									email: {
										set: values.email,
									},
									username: {
										set: values.username,
									},
									displayname: {
										set: values.displayname,
									},
									bio: {
										set: values.bio,
									},
									location: {
										set: values.location,
									},
									website: {
										set: values.website,
									},
									dob: {
										set: values.dob,
									},
								},
							},
						})
							.then(() => {
								// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
								notify('success', 'mutation', `${preferences?.me?.displayname}'s preferences updated`);
							})
							.catch((e: any) => {
								notify('error', 'mutation', e.graphQLErrors[0].message);
							})
							.then(() => {
								setSubmitting(false);
							});
					}}
				>
					{({isSubmitting}) => (
						<Form className="w-full">
							<div className="flex flex-col">
								<div className="flex items-center justify-between pb-10">
									<img src={preferences?.me?.avatar ?? ''} className="rounded-full w-24 h-24" />
									<div className="flex items-center space-x-2">
										<Button
											type="submit"
											variant="tertiary"
											onClick={() => {
												router.reload();
											}}
										>
											Cancel
										</Button>
										<Button type="submit" variant="primary">
											{isSubmitting ? 'Saving' : 'Save'}
										</Button>
									</div>
								</div>
								<div className="grid grid-cols-2 items-center">
									<span>Email</span>
									<InputField type="email" name="email" />
								</div>
								<div className="grid grid-cols-2 items-center">
									<span>Username</span>
									<InputField type="text" name="username" />
								</div>
								<div className="grid grid-cols-2 items-center">
									<span>Display Name</span>
									<InputField type="text" name="displayname" />
								</div>
								<div className="grid grid-cols-2 items-center">
									<span>Bio</span>
									<Textarea name="bio" />
								</div>
								<div className="grid grid-cols-2 items-center">
									<span>Location</span>
									<InputField type="text" name="location" />
								</div>
								<div className="grid grid-cols-2 items-center">
									<span>Website</span>
									<InputField type="text" name="website" />
								</div>
								<div className="grid grid-cols-2 items-center">
									<span>Date of Birth</span>
									<InputField type="date" name="dob" />
								</div>
							</div>
						</Form>
					)}
				</Formik>
			</PreferencesLayout>
		);
	}

	// TODO: Add loading state
	return null;
};
