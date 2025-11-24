<svg
  style="width: 24px; height: 24px; vertical-align: {verticalAlign};"
  viewBox="0 0 24 24"
>
  <path fill="currentColor" d={path} />
</svg>

<script lang="ts">
  interface Props {
    path: string;
    verticalAlign?: string;
  }
  let { path, verticalAlign = 'middle' }: Props = $props();
</script>
