import FadeIn from './FadeIn'

const SERVICES = [
  {
    num: '01',
    title: 'Full Stack Development',
    desc: 'Building scalable end-to-end web applications using .NET Core, Angular, and modern frontend technologies with clean architecture and best practices.',
  },
  {
    num: '02',
    title: 'Cloud Solutions',
    desc: 'Architecting and deploying robust cloud infrastructure on Azure (App Services, Blob Storage, SQL Server) and AWS (EC2, S3, Lambda, API Gateway).',
  },
  {
    num: '03',
    title: 'API Integration',
    desc: 'Integrating third-party APIs, Shopify webhooks, and payment gateways with secure authentication using JWT, OAuth, and FIDO passwordless protocols.',
  },
  {
    num: '04',
    title: 'Database Management',
    desc: 'Designing and optimizing relational and NoSQL databases including SQL Server and DynamoDB, with data migration and query performance tuning.',
  },
  {
    num: '05',
    title: 'DevOps & CI/CD',
    desc: 'Setting up automated build, test, and deployment pipelines using Azure DevOps and Git, with structured logging via Serilog and Sentry monitoring.',
  },
]

export default function ServicesSection() {
  return (
    <section
      className="bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.num}
            as="div"
            delay={i * 0.1}
            y={30}
            className="flex items-start gap-4 sm:gap-6 md:gap-8 py-8 sm:py-10 md:py-12"
            style={{
              borderBottom: i < SERVICES.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
            }}
          >
            {/* Number */}
            <span
              className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.num}
            </span>

            {/* Content */}
            <div className="flex flex-col pt-1 md:pt-2">
              <h3
                className="font-medium uppercase text-[#0C0C0C] leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.title}
              </h3>
              <p
                className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                style={{
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  opacity: 0.6,
                }}
              >
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
