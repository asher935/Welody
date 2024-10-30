export default function StyledInput({ label, name, type, placeholder }: { label: string, name: string, type: string, placeholder: string }) {
    return (
        <>
            <div className="w-full border-b border-mine-300 focus-within:border-mine-700">
                <label htmlFor={name} className="w-full text-mine-300 text-sm">{label}</label>
                <input type={type} id={name} name={name} placeholder={placeholder} className="appearance-none bg-transparent focus:outline-none p-2 w-full autofill:bg-none placeholder:text-mine-300 dark:text-mine-100 text-mine-900" />
            </div>
        </>
    )
}