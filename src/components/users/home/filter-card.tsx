import DatePickerDemo from "@/components/ui/date-picker";
import DrawerDialogDemo from "@/components/ui/drawer-dialog-responsive";
import { InputWithIcon } from "@/components/ui/input-with-icon";
import { FiSearch, FiUserPlus } from "react-icons/fi";

export default function FilterCard() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-[360px]">
            <form className="flex flex-col gap-4">
                <InputWithIcon
                    icon={FiSearch}
                    placeholder="Search..."
                    className="w-full"
                />
                <DatePickerDemo />
                <InputWithIcon
                    icon={FiUserPlus}
                    placeholder="Number of Attendees"
                    type="number"
                />
                <DrawerDialogDemo />
            </form>
        </div>
    )
}