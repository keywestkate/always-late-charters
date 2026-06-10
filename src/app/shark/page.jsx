import SchemaMarkup from '@/components/SEO';

export const metadata = {
  title: 'Marathon FL Shark Fishing Charters | Always Late Charters',
  description: 'Experience high-adrenaline shark fishing in Marathon, Florida Keys with Captain Lucas Ponzoa. Target Tiger, Bull, and Hammerhead sharks on a fully equipped charter.',
  alternates: {
    canonical: 'https://www.alwayslatecharters.com/shark-fishing',
  },
};

export default function SharkFishingPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Shark Fishing Charters in Marathon, FL</h1>

      <section className="prose lg:prose-xl mb-12">
        <p>
          The waters surrounding the Middle Keys offer some of the most consistent and exhilarating
          shark fishing in the world. At Always Late Charters, we target a wide variety of apex predators,
          including hard-fighting Bull Sharks, aggressive Lemon Sharks, massive Hammerheads, and elusive Tiger Sharks.
          Whether you are looking for a high-intensity battle or a memorable family excursion, our custom-tailored
          trips provide a safe, managed environment to get up close and personal with these incredible marine animals.
        </p>

        <h2>What to Expect on Your Marathon Shark Charter</h2>
        <p>
          Our shark fishing trips run out of Captain Hook's Marina in Marathon. We typically utilize fresh,
          locally caught bloody bait to establish a scent trail along the deep reef edges or backcountry channels.
          Captain Lucas uses heavy-duty, commercial-grade tackle to ensure that you have the upper hand during the fight
          while minimizing stress on the animal, ensuring a safe, healthy catch-and-release process.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg my-6 border-l-4 border-blue-500">
          <p className="text-sm italic m-0">
            <strong>Guided by Expertise:</strong> Every trip is captained by Lucas Ponzoa, a 3rd-generation
            Florida Keys fisherman holding a valid United States Coast Guard (USCG) OUPV License with over
            20 years of local marine experience.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-bold">Is shark fishing safe for kids and families?</h3>
            <p className="text-gray-600">Yes! Our shark fishing charters are highly controlled and safe. We stay in calm waters, and Captain Lucas manages all heavy handling by the boat side.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold">Are the sharks kept or released?</h3>
            <p className="text-gray-600">We practice strict catch-and-release for all shark species to protect the local ecosystem and comply with Florida marine regulations.</p>
          </div>
        </div>
      </section>

      <SchemaMarkup pageType="FishingCharter" />
    </main>
  );
}
