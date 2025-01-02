import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@rainbow-me/rainbowkit/styles.css";

import { MantineProvider } from "@mantine/core";
import { theme as mantineTheme } from "./theme";
import { RainbowKitProvider, ConnectButton } from "@rainbow-me/rainbowkit";
import { Notifications } from "@mantine/notifications";
import { WagmiProvider } from "wagmi";
import { config } from "./utils/connect";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <MantineProvider theme={mantineTheme} defaultColorScheme="dark">
            <Notifications />
            <div style={{ padding: "20px" }}>
              <h1>Hello, World!</h1>
              <ConnectButton />
            </div>
          </MantineProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
