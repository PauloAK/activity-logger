import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import moment from 'moment';

export default function Dashboard({ auth, activities }) {
    console.log({ activities});
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        {
                            !activities?.data?.length ?
                                <div>
                                    No activities registered yet! Please, configure your data logger using your api token, available in the profile page.
                                </div>
                            : <>
                                <ActivitiesTable activities={activities.data} />
                                <div className='text-sm opacity-80 text-center mt-3'>
                                    To add new devices, configrue a new logger using your api token, available in the profile page.
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function ActivitiesTable({ activities }) {
    return (
        <table className='table-auto text-center w-full'>
            <thead>
                <tr>
                    <th>Your last 10 activities</th>
                </tr>
            </thead>
            <tbody>
                {
                    activities?.map(activity =>
                        <tr key={activity.id}>
                            <td className='text-center'>
                                {moment(activity.created_at).calendar()}
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}
