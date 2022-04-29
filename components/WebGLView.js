import react, { useEffect, useState } from 'react'
import Unity, { UnityContext } from 'react-unity-webgl'

// Build config
const unityContext = new UnityContext({
  loaderUrl: 'Build/WebGLBuildFolderNew.loader.js',
  dataUrl: 'Build/WebGLBuildFolderNew.data',
  frameworkUrl: 'Build/WebGLBuildFolderNew.framework.js',
  codeUrl: 'Build/WebGLBuildFolderNew.wasm'
})

export default function WebGLView() {
  return (
    <div className="h-[40rem]">
      <Unity className="w-4/6 h-full m-auto" unityContext={unityContext} />
    </div>
  )
}
