"use client"

import { useState, useEffect } from "react"

const codeLines = [
  { text: "binarySearch.java", color: "text-purple-400", isFilename: true },
  { text: "", color: "text-white" },
  {
    text: "public static int binarySearch(int[] arr, int target) {",
    color: "text-white",
    highlight: { public: "text-pink-400", static: "text-pink-400", int: "text-cyan-300", target: "text-orange-300" },
  },
  {
    text: "    int left = 0, right = arr.length - 1;",
    color: "text-white",
    highlight: { left: "text-orange-300", right: "text-orange-300" },
  },
  {
    text: "    while (left <= right) {",
    color: "text-white",
    highlight: { while: "text-pink-400" },
  },
  {
    text: "        int mid = left + (right - left) / 2;",
    color: "text-white",
    highlight: { mid: "text-orange-300" },
  },
  {
    text: "        if (arr[mid] == target) return mid;",
    color: "text-white",
    highlight: { return: "text-pink-400" },
  },
  {
    text: "        else if (arr[mid] < target)",
    color: "text-white",
    highlight: { else: "text-pink-400", if: "text-pink-400" },
  },
  { text: "            left = mid + 1;", color: "text-white" },
  { text: "        else right = mid - 1;", color: "text-white" },
  { text: "    }", color: "text-white" },
  { text: "    return -1;", color: "text-white" },
  { text: "}", color: "text-white", showCursor: true },
]

export function TypewriterEffect() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    if (currentLineIndex >= codeLines.length) return

    const currentLine = codeLines[currentLineIndex]
    const timer = setTimeout(() => {
      if (currentCharIndex < currentLine.text.length) {
        setCurrentCharIndex(currentCharIndex + 1)
      } else {
        // Move to next line
        setDisplayedLines((prev) => [...prev, currentLine.text])
        setCurrentLineIndex(currentLineIndex + 1)
        setCurrentCharIndex(0)
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [currentLineIndex, currentCharIndex])

  const renderLine = (line: string, index: number, isCurrentLine = false) => {
    const codeLineData = codeLines[index]
    if (!codeLineData) return line

    if (codeLineData.isFilename) {
      return <span className="text-purple-400">{line}</span>
    }

    if (codeLineData.highlight) {
      let result = line
      Object.entries(codeLineData.highlight).forEach(([keyword, className]) => {
        result = result.replace(new RegExp(`\\b${keyword}\\b`, "g"), `<span class="${className}">${keyword}</span>`)
      })
      return <span dangerouslySetInnerHTML={{ __html: result }} />
    }

    return <span className={codeLineData.color}>{line}</span>
  }

  return (
    <div className="relative code-container dark bg-gray-900 border-2 border-gradient-to-r from-orange-400 to-purple-600 rounded-xl p-5 overflow-hidden">
      <div className="overflow-hidden text-justify break-words whitespace-pre-wrap font-mono text-sm leading-relaxed">
        {displayedLines.map((line, index) => (
          <p key={index} className="mb-2">
            {renderLine(line, index)}
          </p>
        ))}
        {currentLineIndex < codeLines.length && (
          <p className="mb-2">
            {renderLine(codeLines[currentLineIndex].text.slice(0, currentCharIndex), currentLineIndex, true)}
            {codeLines[currentLineIndex].showCursor && (
              <span className="inline-block w-2 h-5 bg-white animate-pulse ml-1" />
            )}
          </p>
        )}
      </div>
    </div>
  )
}
