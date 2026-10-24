export interface OpenSourceRepo {
  id: string;
  name: string;
  url: string;
  description: string;
  tags: string[];
}

export const openSourceRepos: OpenSourceRepo[] = [
  {
    id: "rabbitmq-server",
    name: "rabbitmq/rabbitmq-server",
    url: "https://github.com/rabbitmq/rabbitmq-server",
    description:
      "Contributed to the core Erlang message broker. Fixed HTTP 500 crashes on sort/pagination queries in the Management API, resolved TLS certificate expiration health check crashes, and introduced configurable startup delay for client listeners during Kubernetes node synchronization.",
    tags: ["Contributed", "Erlang", "Distributed Systems", "Message Broker", "13.8k ★"],
  },
  {
    id: "tauri",
    name: "tauri-apps/tauri",
    url: "https://github.com/tauri-apps/tauri",
    description:
      "Contributed to the upstream Tauri framework codebase, supporting the cross-platform Rust and Web architecture for lightweight native desktop and mobile applications.",
    tags: ["Contributed", "Rust", "Desktop", "Cross-Platform", "90k+ ★"],
  },
  {
    id: "quinn",
    name: "quinn-rs/quinn",
    url: "https://github.com/quinn-rs/quinn",
    description:
      "Contributed to Quinn, the async-first pure-Rust implementation of the IETF QUIC transport protocol for low-latency networking over UDP.",
    tags: ["Contributed", "Rust", "QUIC", "Networking", "Async", "Tokio"],
  },
];
