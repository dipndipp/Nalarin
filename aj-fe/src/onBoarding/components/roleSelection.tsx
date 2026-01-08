import { useState } from "react";
import RoleCard from "./roleCard";

export default function RoleSelection() {
    const [selectedRole, setSelectedRole] = useState<'student' | 'mentor' | null>(null);

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Card */}
            <RoleCard
                icon="🎓"
                title="Student"
                description="I want to learn and get guidance"
                isSelected={selectedRole === 'student'}
                onClick={() => setSelectedRole('student')}
            />

            {/* Mentor Card */}
            <RoleCard
                icon="👨‍🏫"
                title="Mentor"
                description="I want to teach and help others"
                isSelected={selectedRole === 'mentor'}
                onClick={() => setSelectedRole('mentor')}
            />
        </div>
    );
}
