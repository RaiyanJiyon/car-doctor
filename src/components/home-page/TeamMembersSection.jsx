// Import necessary components and team members
import React from "react";
import SectionTitle from "../shared/SectionTitle";
import teamMembers from "@/lib/teamMembers";
import TeamMemberCard from "./TeamMemberCard";

const TeamMembersSection = () => {
  return (
    <div className="p-8 text-center">
      {/* Header Section */}
      <div>
        <SectionTitle
          heading="Team"
          title="Meet Our Team"
          description="The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."
        />
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          // Map through team members array and render a TeamMemberCard for each member
          teamMembers.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} />
          ))
        }
      </div>
    </div>
  );
};

export default TeamMembersSection;
