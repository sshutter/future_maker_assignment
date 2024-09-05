"use client";
import client from "@/libs/ApolloClient";
import { ApolloProvider } from "@apollo/client";

export default function MyApolloProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
