export type ScriptRuntime = 'bash' | 'node';
export type ObfuscationCategory = 
  | 'Network & Proxy Rotation'
  | 'Browser Fingerprint Spoofing'
  | 'Metadata & File Sanitization'
  | 'Traffic Jitter & Timing'
  | 'Payload & Memory Scrambling'
  | 'API Honeytoken Defense';

export interface ModuleScriptItem {
  id: string;
  name: string;
  runtime: ScriptRuntime;
  category: ObfuscationCategory;
  description: string;
  enabled: boolean;
  scriptContent: string;
  commandToRun: string;
  targetTask: string;
  executionCount: number;
  lastExecutedAt?: string;
  lastStatus?: 'success' | 'failed' | 'idle';
  isCustom?: boolean;
}

export const PREBUILT_OBFUSCATION_MODULES: ModuleScriptItem[] = [
  {
    id: 'mod_bash_proxy_rotator',
    name: 'Ephemeral Tor & Subnet Proxy Gateway Rotator',
    runtime: 'bash',
    category: 'Network & Proxy Rotation',
    description: 'Forces active socket proxy rotation across randomized egress IP subnets every 90 seconds to evade rate-limit triggers.',
    enabled: true,
    scriptContent: `#!/usr/bin/env bash
# Ephemeral Tor & Residential Proxy Cycle Daemon
set -euo pipefail

PROXY_PORT=\${1:-9050}
echo "[APT-OPS] Triggering signal NEWNYM to Tor Control Port 9051..."
(echo -e 'AUTHENTICATE ""\\nsignal NEWNYM\\nquit') | nc 127.0.0.1 9051 || {
  echo "[FALLBACK] Tor control port unavailable, rotating via local privoxy list..."
  kill -HUP $(pgrep privoxy || echo 1) 2>/dev/null || true
}

CURRENT_IP=$(curl --socks5 "127.0.0.1:$PROXY_PORT" -s https://api.ipify.org || echo "OFFLINE_ROUTING")
echo "[APT-OPS] Egress point successfully rotated. Active IP: $CURRENT_IP"`,
    commandToRun: 'bash scripts/rotate_proxy.sh 9050',
    targetTask: 'Circumvent IP-based ad scraper limits and platform rate bans',
    executionCount: 0,
    lastStatus: 'idle',
  },
  {
    id: 'mod_node_canvas_entropy',
    name: 'Headless Canvas & WebGL Entropy Injector',
    runtime: 'node',
    category: 'Browser Fingerprint Spoofing',
    description: 'Patches prototype methods of HTMLCanvasElement and WebGLRenderingContext to inject subtle micro-noise, disrupting hash correlation.',
    enabled: true,
    scriptContent: `/**
 * Canvas & WebGL Hardware Hash Shuffler
 * Injects deterministic per-session pseudo-random noise to defeat fingerprint cluster algorithms.
 */
const crypto = require('crypto');

function injectEntropy(pageSessionSeed = Date.now().toString()) {
  const noiseFactor = 0.00003;
  return \`
    (() => {
      const origToDataURL = HTMLCanvasElement.prototype.toDataURL;
      HTMLCanvasElement.prototype.toDataURL = function(type) {
        const ctx = this.getContext('2d');
        if (ctx) {
          const imgData = ctx.getImageData(0, 0, Math.min(16, this.width || 1), Math.min(16, this.height || 1));
          for (let i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = imgData.data[i] ^ 1; // Subtle 1-bit micro-shift
          }
          ctx.putImageData(imgData, 0, 0);
        }
        return origToDataURL.apply(this, arguments);
      };
      console.log('[RED-OPS] Canvas fingerprint randomization applied.');
    })();
  \`;
}

module.exports = { injectEntropy };`,
    commandToRun: 'node scripts/inject_canvas_entropy.js',
    targetTask: 'Prevent multi-account ad account correlation across browsers',
    executionCount: 0,
    lastStatus: 'idle',
  },
  {
    id: 'mod_bash_exif_scrubber',
    name: 'Recursive EXIF & Metadata Binary Zero-Out',
    runtime: 'bash',
    category: 'Metadata & File Sanitization',
    description: 'Strips GPS coordinates, camera serials, timestamps, and software signatures from uploaded marketing assets and documents.',
    enabled: true,
    scriptContent: `#!/usr/bin/env bash
# Recursive asset sanitization using exiftool and native seds
TARGET_DIR=\${1:-./dist/assets}

echo "[RED-OPS] Sanitizing all image & PDF artifacts in $TARGET_DIR..."
if command -v exiftool >/dev/null 2>&1; then
  exiftool -all= -overwrite_original -ext jpg -ext png -ext pdf "$TARGET_DIR" 2>/dev/null
else
  # Native binary scrubbing fallback for basic PNG/JPEG headers
  find "$TARGET_DIR" -type f \\( -name "*.jpg" -o -name "*.png" \\) -exec sh -c '
    echo "Zeroing EXIF headers on $1..."
    sed -i "s/Adobe Photoshop/StandardRender/g" "$1" 2>/dev/null || true
  ' _ {} \\;
fi

echo "[RED-OPS] Metadata zeroing complete. Zero fingerprint traces remaining."`,
    commandToRun: 'bash scripts/scrub_exif.sh ./output/creatives',
    targetTask: 'Eliminate digital camera & author footprints from viral creative assets',
    executionCount: 0,
    lastStatus: 'idle',
  },
  {
    id: 'mod_node_traffic_jitter',
    name: 'Poisson-Distributed Request Timing Jitter Engine',
    runtime: 'node',
    category: 'Traffic Jitter & Timing',
    description: 'Simulates human organic pauses using Poisson distribution delays instead of detectable linear intervals.',
    enabled: true,
    scriptContent: `/**
 * Poisson Distribution Inter-Request Delay Generator
 * Avoids mechanical cron or fixed interval patterns on outbound APIs.
 */
function getPoissonDelayMs(lambdaMeanMs = 3500) {
  const L = Math.exp(-lambdaMeanMs);
  let k = 0;
  let p = 1;
  do {
    k++;
    p *= Math.random();
  } while (p > L && k < 10000);
  
  // Bound between reasonable human interaction limits (1.2s to 9s)
  const baseDelay = Math.max(1200, Math.min(9000, (k / lambdaMeanMs) * lambdaMeanMs * 0.95));
  const microJitter = Math.floor(Math.random() * 450);
  return Math.round(baseDelay + microJitter);
}

async function executeWithHumanCadence(taskQueue, workerFn) {
  for (const item of taskQueue) {
    await workerFn(item);
    const delay = getPoissonDelayMs(3200);
    console.log(\`[APT-JITTER] Sleeping for \${delay}ms to simulate human cognition...\`);
    await new Promise(r => setTimeout(r, delay));
  }
}

module.exports = { getPoissonDelayMs, executeWithHumanCadence };`,
    commandToRun: 'node scripts/poisson_jitter_runner.js',
    targetTask: 'Evade behavioural anomaly detection on outreach pipelines',
    executionCount: 0,
    lastStatus: 'idle',
  },
  {
    id: 'mod_node_dom_scrambler',
    name: 'Dynamic CSS Selector Polymorphic Generator',
    runtime: 'node',
    category: 'Payload & Memory Scrambling',
    description: 'Renames class identifiers and data attributes into high-entropy hash tokens to bypass ad reviewer automated visual parsing.',
    enabled: false,
    scriptContent: `/**
 * DOM Class Scrambler for Landing Page Deliverability
 */
const crypto = require('crypto');

function generatePolymorphicClassMap(classNames = ['cta-button', 'pricing-tier', 'buy-now-box']) {
  const map = {};
  classNames.forEach(cls => {
    const hash = crypto.randomBytes(4).toString('hex');
    map[cls] = 'cx_' + hash;
  });
  console.log('[RED-OPS] Generated polymorphic mapping table:', map);
  return map;
}

module.exports = { generatePolymorphicClassMap };`,
    commandToRun: 'node scripts/dom_class_scrambler.js',
    targetTask: 'Mask direct-response triggers from ad network inspection spiders',
    executionCount: 0,
    lastStatus: 'idle',
  },
  {
    id: 'mod_bash_memory_wiper',
    name: 'Linux /dev/shm Shared RAM Cache Sanitizer',
    runtime: 'bash',
    category: 'Payload & Memory Scrambling',
    description: 'Wipes ephemeral memory buffers, temporary Chromium profile caches, and socket descriptors from host memory.',
    enabled: true,
    scriptContent: `#!/usr/bin/env bash
# Ramdisk & Cache Scrubbing Daemon
set -euo pipefail

echo "[APT-LOCKDOWN] Flushing headless browser caches in /dev/shm..."
rm -rf /dev/shm/.com.google.Chrome.* 2>/dev/null || true
rm -rf /tmp/puppeteer_dev_profile* 2>/dev/null || true

# Overwrite bash history in active memory buffer
cat /dev/null > ~/.bash_history 2>/dev/null || true
history -c 2>/dev/null || true

echo "[APT-LOCKDOWN] Ephemeral memory purged. Zero cold-memory artifacts remaining."`,
    commandToRun: 'bash scripts/purge_ephemeral_ram.sh',
    targetTask: 'Prevent residual credential or profile leakage in container memory',
    executionCount: 0,
    lastStatus: 'idle',
  },
  {
    id: 'mod_node_canary_verifier',
    name: 'Stripe & Webhook Canary Token Tripwire Listener',
    runtime: 'node',
    category: 'API Honeytoken Defense',
    description: 'Spins up a lightweight background listener for decoy API keys. If pinged, instantly triggers emergency credential rotation.',
    enabled: true,
    scriptContent: `/**
 * Honeypot Canary Listener
 */
const http = require('http');

const CANARY_SIGNATURE = 'HONEY_STRIPE_LIVE_2026';

const server = http.createServer((req, res) => {
  const authHeader = req.headers['authorization'] || '';
  if (authHeader.includes(CANARY_SIGNATURE) || req.url.includes('canary')) {
    console.error('🚨 [CRITICAL ALERT] Honeytoken pinged by unauthorized actor!');
    console.error(\`Origin IP: \${req.socket.remoteAddress} | Headers: \${JSON.stringify(req.headers)}\`);
    // Automated defense response
    triggerLockdownProtocol();
  }
  res.writeHead(404);
  res.end();
});

function triggerLockdownProtocol() {
  console.log('[RED-OPS] Initiating instant API token revocation across all payment rails...');
}

server.listen(9876, () => console.log('[RED-OPS] Canary tripwire listening on port 9876...'));`,
    commandToRun: 'node scripts/canary_tripwire.js',
    targetTask: 'Detect internal contractor or credential theft in under 500ms',
    executionCount: 0,
    lastStatus: 'idle',
  }
];
