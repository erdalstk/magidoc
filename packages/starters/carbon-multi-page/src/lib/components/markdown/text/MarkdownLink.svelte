<script lang="ts">
  import type { MarkdownOptions } from '@magidoc/plugin-svelte-marked'
  import { urlUtils } from '@magidoc/plugin-svelte-marked'

  import { Link } from 'carbon-components-svelte'
  import type { marked } from 'marked'

  export let token: marked.Tokens.Link
  export let options: MarkdownOptions

  function isRelative(url: string): boolean {
    return url.startsWith('/') || url.startsWith('#')
  }
</script>

<Link
  href={isRelative(token.href)
    ? urlUtils.joinUrlPaths(options.baseUrl, token.href)
    : token.href}
  title={token.title}
>
  <slot />
</Link>
