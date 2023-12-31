import React, { createContext, useCallback, useEffect, useMemo, useState } from "react"
import { create, insertMultiple, search } from "@orama/orama"

export const OramaContext = createContext(null)

export const OramaProvider = ({ children, schema, initialData }) => {
  const [db, setDb] = useState(null)

  useEffect(() => {
    const init = async() => {
      const database = await create({
        schema,
      })

      setDb(database)

      await insertMultiple(database, initialData)
    }

    init()
  }, [schema, initialData])

  const searchDatabase = useCallback(
    async(term) => {
      if (!db) return null

      if (term) {
        const searchResult = await search(db, term)

        const documents = searchResult.hits.map(
          (result) => result.document,
        )

        return documents
      } else {
        const allDocuments = Object.values(db?.data?.docs?.docs)

        return allDocuments
      }
    },
    [db],
  )

  const value = useMemo(() => ({ searchDatabase }), [searchDatabase])

  return (
    <OramaContext.Provider value={value}>
        {children}
    </OramaContext.Provider>
  )
}
