import { codingProfiles, personalInfo } from "@/lib/data";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="font-display text-2xl uppercase">{personalInfo.name}</p>
          <p className="mt-2 text-xs tracking-[0.22em] text-zinc-400">AI & SOFTWARE ENGINEER</p>
          <p className="mt-2 text-xs tracking-[0.2em] text-zinc-500">{personalInfo.location}</p>
        </div>

        <div className="grid gap-2 text-xs tracking-[0.2em] text-zinc-400 md:text-right">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors hover:text-white"
          >
            GITHUB
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors hover:text-white"
          >
            LINKEDIN
          </a>
          {codingProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-white"
            >
              {profile.name.toUpperCase()}
            </a>
          ))}
          <a href={`mailto:${personalInfo.email}`} className="block transition-colors hover:text-white">
            EMAIL
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
            className="block transition-colors hover:text-white"
          >
            PHONE
          </a>
          <p className="pt-2 text-zinc-500">{year}</p>
        </div>
      </div>
    </footer>
  );
}
