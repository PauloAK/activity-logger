import PaginationButton from '@/Components/PaginationButton';
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
                                <div className='text-center text-gray-900'>
                                    No activities registered yet!<br/>
                                    Please, configure your data logger using your api token, available in the <a className='text-blue-500' href={route('profile.edit')}>profile page</a>.
                                </div>
                            : <>
                                <ActivitiesTable activities={activities} />
                                <div className='text-sm opacity-70 text-center mt-3'>
                                    To add new devices, configure a new logger using your api token, available in the profile page.
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
                    <th className='text-center' colSpan={2}>Your recorded activities</th>
                </tr>
                <tr>
                    <th className='text-center'>Device</th>
                    <th className='text-center'>Moment</th>
                </tr>
            </thead>
            <tbody>
                {
                    activities?.data?.map(activity =>
                        <tr key={activity.id}>
                            <td className='text-center'>
                                {activity.device_id}
                            </td>
                            <td className='text-center'>
                                {moment(activity.created_at).calendar()}
                            </td>
                        </tr>
                    )
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={2} className='text-center'>
                        <div className='text-sm my-2 opacity-70'>
                            Showing from entry {activities.from} to {activities.to}, of {activities.total} total entries
                        </div>
                        <div className='flex gap-2 justify-center'>
                            {
                                activities?.links?.map(link => <PaginationButton isActive={link.active} isDisabled={!link.active && !link.url} className='text-xs p-1' href={link.url}>{link.label}</PaginationButton>)
                            }
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}
