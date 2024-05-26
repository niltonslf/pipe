import {getIframeId} from '@/utils/screen'

export const getIframeHref = (iframe: HTMLIFrameElement): string => {
  return iframe.contentWindow?.location.href || ''
}

export const getIframeBody = (
  iframe: HTMLIFrameElement,
): HTMLElement | undefined => {
  return iframe.contentDocument?.body
}

export const getIframeElem = (iframeId: string) => {
  const selector = `#${getIframeId(iframeId)}`
  return document.querySelector<HTMLIFrameElement>(selector)
}
