export interface OpenSourceContribution {
  id: string;
  prNumber: number;
  title: string;
  url: string;
  repo: string;
  repoUrl: string;
  stars: string;
  description: string;
  tags: string[];
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: "rabbitmq-17370",
    prNumber: 17370,
    title:
      "Fix Management HTTP API crash on sort/pagination queries — rabbitmq/rabbitmq-server #17370",
    url: "https://github.com/rabbitmq/rabbitmq-server/pull/17370",
    repo: "rabbitmq/rabbitmq-server",
    repoUrl: "https://github.com/rabbitmq/rabbitmq-server",
    stars: "13.8k",
    description:
      "Fixed HTTP 500 crashes in the RabbitMQ Management API (/api/queues?sort=...) during node maintenance and stats aggregation. Replaced lists:partition/2 with lists:search/2 for first-occurrence deduplication on duplicate keys, added defensive handling for scalar values and non-tuple lists, and added unit tests in rabbit_mgmt_test_unit_SUITE. Merged into main (RabbitMQ 4.4.0) and backported to 4.3.x.",
    tags: [
      "Merged",
      "RabbitMQ 4.4.0",
      "Erlang",
      "HTTP API",
      "Bug Fix",
      "13.8k ★",
    ],
  },
  {
    id: "rabbitmq-17345",
    prNumber: 17345,
    title:
      "Fix certificate expiration health check crashes — rabbitmq/rabbitmq-server #17345",
    url: "https://github.com/rabbitmq/rabbitmq-server/pull/17345",
    repo: "rabbitmq/rabbitmq-server",
    repoUrl: "https://github.com/rabbitmq/rabbitmq-server",
    stars: "13.8k",
    description:
      "Fixed HTTP 500 badarith crashes in the TLS certificate expiration health check API endpoint when inspecting unusual certificates, and corrected RFC 5280 UTCTime date decoding for 1970s certificates. Added error handling around pem_entry_decode in both HTTP and CLI diagnostics listeners, preventing false liveness probe failures in Kubernetes. Merged into main (RabbitMQ 4.4.0) and backported to 4.3.x.",
    tags: [
      "Merged",
      "RabbitMQ 4.4.0",
      "Erlang",
      "TLS / Security",
      "Kubernetes",
      "13.8k ★",
    ],
  },
  {
    id: "rabbitmq-17284",
    prNumber: 17284,
    title:
      "Add configurable startup delay for client connection listeners — rabbitmq/rabbitmq-server #17284",
    url: "https://github.com/rabbitmq/rabbitmq-server/pull/17284",
    repo: "rabbitmq/rabbitmq-server",
    repoUrl: "https://github.com/rabbitmq/rabbitmq-server",
    stars: "13.8k",
    description:
      "Introduced listeners.startup_delay in rabbit.schema and rabbit.erl to delay opening client connection ports until clustered metadata stores (Khepri / Mnesia) finish synchronizing, preventing transient connection errors during rolling Kubernetes restarts. Merged via #17289 with attribution.",
    tags: [
      "Merged (via #17289)",
      "RabbitMQ 4.4.0",
      "Erlang",
      "Distributed Systems",
      "13.8k ★",
    ],
  },
  {
    id: "rabbitmq-17258",
    prNumber: 17258,
    title:
      "Fix stream x-max-age equivalence checks — rabbitmq/rabbitmq-server #17258",
    url: "https://github.com/rabbitmq/rabbitmq-server/pull/17258",
    repo: "rabbitmq/rabbitmq-server",
    repoUrl: "https://github.com/rabbitmq/rabbitmq-server",
    stars: "13.8k",
    description:
      "Resolved false PRECONDITION_FAILED errors during stream redeclarations by normalizing time duration values (e.g. '1D' vs '24h') to integer millisecond values prior to assertion checks. Merged via #17259 with attribution.",
    tags: ["Merged (via #17259)", "RabbitMQ 4.4.0", "Erlang", "Streams", "13.8k ★"],
  },
];
