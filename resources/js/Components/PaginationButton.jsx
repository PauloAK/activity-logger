import { Link } from "@inertiajs/react";

export default function PaginationButton({ className = '', isDisabled, isActive, href, children, ...props }) {
    return (
        <Link
            {...props}
            className={
                `inline-flex items-center p-1 px-2  border rounded-md border border-gray-400 font-semibold text-xs  uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    isDisabled && 'opacity-25'
                } `
                + className
                + ( isDisabled ? ` hover:cursor-not-allowed` : '')
                + ( isActive ? ` bg-gray-800 text-white hover:bg-gray-700 focus:bg-gray-900 active:bg-gray-900` : ' bg-white text-gray-800 hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-200')
            }
            disabled={isDisabled}
            href={isDisabled ? null : href}
            dangerouslySetInnerHTML={{ __html: children}}
        />
    );
}
