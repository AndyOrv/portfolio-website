import react from 'react'
import Unity, { UnityContext } from 'react-unity-webgl'

// Build config
const unityContext = new UnityContext({
  loaderUrl: 'Build/Build.loader.js',
  dataUrl: 'Build/Build.data',
  frameworkUrl: 'Build/Build.framework.js',
  codeUrl: 'Build/Build.wasm'
})

export default function WebGLView() {
  return <Unity unityContext={unityContext} />
}
