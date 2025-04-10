import { ProjectNav } from "@/components/ProjectNav";
import ZoomImageWrapper from "@/components/ZoomImageWrapper";

export default function Home() {
  return (
    <div className="flex justify-between h-full max-w-screen-xl overflow-y-auto scrollbar-hide smooth-scroll ">
      <header className="sticky top-0 flex flex-col w-[48%] h-full px-8">
        <div className="h-full flex flex-col">
          <a href="/" className="hover:underline hover:decoration-(--body)">
            <p className="text-sm text-(--body)">&#8592; Home</p>
          </a>
          <h1 className="font-bold text-4xl text-(--cyan) pt-8">
            Rate My Dog Park
          </h1>
          <p className="dates text-xs text-(--subheader) pt-4">
            2025 - PRESENT
          </p>
          <div className="details flex items-center gap-2 pt-4">
            <p className="text-md text-(--orange)">Design & Development</p>
            <span className="w-px h-4 my-auto bg-(--orange)/50"></span>

            <a
              href="https://www.ratemydogpark.com"
              target="_blank"
              className="hover:underline hover:decoration-(--orange)"
            >
              <p className="text-md text-(--orange) flex items-center gap-1">
                <svg
                  className="size-3 fill-(--orange)"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m5 2c.55228 0 1 .44772 1 1s-.44772 1-1 1h-1v8h8v-1c0-.5523.4477-1 1-1s1 .4477 1 1v1c0 1.1046-.8954 2-2 2h-8c-1.10457 0-2-.8954-2-2v-8c0-1.10457.89543-2 2-2zm10-1v4.99814453c0 .55229-.4477 1-1 1s-1-.44771-1-1v-1.58395453l-4.28429 4.28427c-.39052.39053-1.02369.39053-1.41421 0-.39053-.39052-.39053-1.02369 0-1.41421l4.2843-4.28425h-1.58960859c-.55228 0-1-.44772-1-1s.44772-1 1-1z"
                    fillRule="evenodd"
                  />
                </svg>
                www.ratemydogpark.com
              </p>
            </a>
          </div>
          <p className="text-md text-(--body) pt-4">
            Rate My Dog Park is a full-stack web application designed to help
            dog owners find, review, and rate local dog parks based on real user
            experiences. The platform acts as a community-driven resource that
            brings transparency to what’s often an overlooked aspect of pet
            guardianship — the quality and safety of public dog parks.
          </p>

          <div className="pt-6 flex gap-6">
            {["Next.js", "Firebase", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="py-1 px-3 rounded-sm text-sm font-semibold bg-(--selection) text-(--foreground)"
              >
                {tech}
              </span>
            ))}
          </div>
          <ProjectNav />
        </div>
      </header>

      <main className="w-[48%] text-(--body) flex flex-col gap-8">
        <div id="problem" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">
            Understanding the Problem
          </h1>
          <p>
            As a dog parent myself, I noticed a recurring pain point: finding a
            reliable dog park can feel like a guessing game. Online reviews are
            scattered, often outdated, and usually don’t tell you much beyond
            location. Is the park fenced? Is there water access? Are aggressive
            dogs a problem there? These are the details that matter to dog
            owners — and they’re rarely centralized in one place.
          </p>
          <p>
            The idea for Rate My Dog Park came from wanting to solve that exact
            problem. I envisioned a space where the dog-owning community could
            share honest, useful feedback with each other. By giving users a
            place to rate parks and read trusted reviews, the platform empowers
            people to make informed decisions about where they take their dogs —
            and helps avoid bad experiences.
          </p>

          <ZoomImageWrapper
            src="/rmdp-profile.png"
            className="rounded-sm"
            alt="Dog park profile page displaying park name, address, average rating, photo gallery and amenities."
          />
        </div>

        <div id="approach" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">
            My Role & Approach
          </h1>
          <p>
            This was a solo project where I handled everything from ideation to
            deployment. I chose a full-stack JavaScript stack with Next.js for
            the frontend and Firebase for the backend. This allowed me to move
            quickly, while also implementing real-time features like live review
            updates and dynamic park pages.
          </p>
          <p>
            One of the most important goals for me was creating a seamless user
            experience. I started by mapping out user journeys — from
            discovering the site for the first time, to searching for a park in
            a new neighborhood, to leaving a thoughtful review after a great (or
            not-so-great) visit. That UX thinking shaped the core flow of the
            application.
          </p>
          <ZoomImageWrapper
            src="/rmdp-parks.png"
            className="rounded-sm"
            alt="City page displaying a list of dog parks with average ratings alongside a map with location markers."
          />
        </div>

        <div id="solution" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">
            Building the Solution
          </h1>
          <p>
            The platform is built with Next.js, using Tailwind CSS for styling
            and layout. I integrated Firebase Authentication so users can log in
            seamlessly via Google. All user-generated content — from reviews to
            submitted parks — is stored in Firestore, which allows for real-time
            updates.
          </p>
          <p>
            For geolocation, I implemented the Google Maps API, which lets users
            get directions directly from the webpage and (in a future update)
            filter by amenities like water stations, trails, and small dog
            areas.
          </p>
          <p>
            To prevent spam and ensure quality content, I also added a
            moderation layer. Parks submitted by users don’t immediately go live
            — they enter a pending state in Firestore where an admin can approve
            or reject them. This simple feature mimics how real-world platforms
            maintain integrity.
          </p>
          <ZoomImageWrapper
            src="/rmdp-admin.png"
            className="rounded-sm"
            alt="Admin dashboard with a list of newly submitted parks awaiting approval."
          />
        </div>

        <div id="challenges" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">Key Challenges</h1>
          <p>
            One of the more complex challenges was integrating Google Maps in a
            way that felt intuitive and lightweight. I didn’t want the map to
            overwhelm the experience, but I wanted it to be central to how
            people discover parks. I built a basic search system using
            location-based queries and used Firestore’s structured data to
            return relevant results efficiently.
          </p>
          <p>
            Another challenge was managing asynchronous data updates. Reviews
            and new parks are constantly being added, and I wanted those changes
            to be reflected without requiring a page refresh. Firestore’s
            real-time listeners helped me achieve that, but it required careful
            structuring of the component logic to avoid memory leaks and
            rerenders.
          </p>
          <p>
            Lastly, I had to think through how to handle user content safely and
            responsibly. Features like the ability to delete your own review
            were important to building trust and maintaining community
            standards.
          </p>
          <ZoomImageWrapper
            src="/rmdp-review.png"
            className="rounded-sm"
            alt="Dog park profile page with a review submission form followed by a list of user reviews."
          />
        </div>

        <div id="impact" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">The Impact</h1>
          <p>
            While this project started as a portfolio piece, it’s something I
            believe could be genuinely useful to real dog parents. The MVP is
            now live and functional, and early testers have mentioned how clean
            and intuitive the experience feels — especially compared to
            searching through scattered Google reviews or Facebook threads.
          </p>
          <p>
            From a development standpoint, this project helped me level up my
            skills in:
          </p>
          <ul>
            <li>
              - Building CRUD operations across multiple data types (users,
              reviews, parks)
            </li>
            <li>- Managing real-time data and authentication flows</li>
            <li>- Integrating third-party APIs (Google Maps) effectively </li>
            <li>- Designing with accessibility and simplicity in mind</li>
          </ul>
          <ZoomImageWrapper
            src="/rmdp-add-city.png"
            className="rounded-sm"
            alt="New park submission page with a form for entering park name, location, and amenities."
          />
        </div>

        <div id="future" className="space-y-4 pb-80">
          <h1 className="text-(--header) text-2xl font-bold">What’s Next</h1>
          <p>
            This was the first time I built a full product end-to-end that
            included user authentication, a structured database, and API
            integrations — and I learned a ton. If I were to continue developing
            it, I’d love to:
          </p>
          <ul>
            <li>- Allow users to search parks by location from map</li>
            <li>- Filter parks by amenities on map</li>
            <li>- Admin access to ban users</li>
            <li>- Implement park and community event notices</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
