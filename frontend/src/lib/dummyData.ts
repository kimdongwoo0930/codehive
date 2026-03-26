import { Post, Review } from '@/types'

export const dummyPosts: Post[] = [
  {
    id: 1,
    title: 'Spring Security JWT 필터 구현',
    language: 'Java',
    description: 'Spring Security에서 JWT 토큰을 검증하는 커스텀 필터를 구현했습니다. OncePerRequestFilter를 상속받아 매 요청마다 토큰을 검증합니다.',
    code: `public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenProvider tokenProvider;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
        HttpServletRequest request,
        HttpServletResponse response,
        FilterChain filterChain
    ) throws ServletException, IOException {
        String token = resolveToken(request);

        if (token != null && tokenProvider.validateToken(token)) {
            String username = tokenProvider.getUsername(token);
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            Authentication auth = new UsernamePasswordAuthenticationToken(
                userDetails, null, userDetails.getAuthorities()
            );
            SecurityContextHolder.getContext().setAuthentication(auth);
        }

        filterChain.doFilter(request, response);
    }

    private String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}`,
    author: 'kim_dev',
    createdAt: '2025-03-20',
    likeCount: 42,
    reviewCount: 8,
    aiReviewed: true,
  },
  {
    id: 2,
    title: 'React Custom Hook - useFetch',
    language: 'TypeScript',
    description: 'API 호출을 추상화한 커스텀 훅입니다. 로딩 상태, 에러 처리, 재시도 기능을 포함합니다.',
    code: `import { useState, useEffect, useCallback } from 'react'

interface FetchState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

function useFetch<T>(url: string, options?: RequestInit) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    try {
      const res = await fetch(url, options)
      if (!res.ok) throw new Error(\`HTTP error! status: \${res.status}\`)
      const data: T = await res.json()
      setState({ data, loading: false, error: null })
    } catch (err) {
      setState({ data: null, loading: false, error: err as Error })
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { ...state, refetch: fetchData }
}

export default useFetch`,
    author: 'lee_ts',
    createdAt: '2025-03-19',
    likeCount: 35,
    reviewCount: 12,
    aiReviewed: true,
  },
  {
    id: 3,
    title: 'FastAPI 비동기 DB 연결 처리',
    language: 'Python',
    description: 'SQLAlchemy AsyncSession을 사용한 FastAPI 비동기 데이터베이스 연결 패턴입니다.',
    code: `from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.future import select
from typing import AsyncGenerator

DATABASE_URL = "postgresql+asyncpg://user:password@localhost/dbname"

engine = create_async_engine(DATABASE_URL, echo=True)
AsyncSessionLocal = sessionmaker(
    engine, class_=AsyncSession, expire_on_commit=False
)

async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()

async def get_user(db: AsyncSession, user_id: int):
    result = await db.execute(
        select(User).where(User.id == user_id)
    )
    return result.scalar_one_or_none()

@app.get("/users/{user_id}")
async def read_user(user_id: int, db: AsyncSession = Depends(get_db)):
    user = await get_user(db, user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user`,
    author: 'park_py',
    createdAt: '2025-03-18',
    likeCount: 28,
    reviewCount: 6,
    aiReviewed: true,
  },
  {
    id: 4,
    title: 'Go 동시성 패턴 - Worker Pool',
    language: 'Go',
    description: 'Go의 goroutine과 channel을 활용한 Worker Pool 패턴 구현입니다. 작업 큐와 결과 처리를 효율적으로 관리합니다.',
    code: `package main

import (
    "fmt"
    "sync"
)

type Job struct {
    ID   int
    Data interface{}
}

type Result struct {
    JobID  int
    Output interface{}
    Err    error
}

func workerPool(numWorkers int, jobs <-chan Job, results chan<- Result) {
    var wg sync.WaitGroup

    for i := 0; i < numWorkers; i++ {
        wg.Add(1)
        go func(workerID int) {
            defer wg.Done()
            for job := range jobs {
                result := processJob(job)
                results <- result
            }
        }(i)
    }

    go func() {
        wg.Wait()
        close(results)
    }()
}

func processJob(job Job) Result {
    // 실제 작업 처리 로직
    return Result{
        JobID:  job.ID,
        Output: fmt.Sprintf("processed job %d", job.ID),
    }
}`,
    author: 'choi_go',
    createdAt: '2025-03-17',
    likeCount: 19,
    reviewCount: 4,
    aiReviewed: false,
  },
  {
    id: 5,
    title: 'Rust 안전한 파일 처리',
    language: 'Rust',
    description: 'Rust의 소유권 시스템을 활용한 안전한 파일 읽기/쓰기 구현입니다. Result 타입으로 에러를 명시적으로 처리합니다.',
    code: `use std::fs::{self, File};
use std::io::{self, BufRead, BufReader, Write};
use std::path::Path;

fn read_lines<P: AsRef<Path>>(path: P) -> io::Result<Vec<String>> {
    let file = File::open(path)?;
    let reader = BufReader::new(file);
    reader.lines().collect()
}

fn write_file<P: AsRef<Path>>(path: P, content: &str) -> io::Result<()> {
    let mut file = File::create(path)?;
    file.write_all(content.as_bytes())?;
    Ok(())
}

fn process_file(input: &str, output: &str) -> Result<(), Box<dyn std::error::Error>> {
    let lines = read_lines(input)?;
    let processed: Vec<String> = lines
        .iter()
        .filter(|line| !line.trim().is_empty())
        .map(|line| line.trim().to_uppercase())
        .collect();

    write_file(output, &processed.join("\\n"))?;
    println!("Processed {} lines", processed.len());
    Ok(())
}

fn main() {
    if let Err(e) = process_file("input.txt", "output.txt") {
        eprintln!("Error: {}", e);
        std::process::exit(1);
    }
}`,
    author: 'jung_rust',
    createdAt: '2025-03-16',
    likeCount: 15,
    reviewCount: 3,
    aiReviewed: true,
  },
  {
    id: 6,
    title: 'JavaScript Promise 체인 최적화',
    language: 'JavaScript',
    description: 'Promise.all과 async/await를 활용한 병렬 API 호출 최적화 패턴입니다.',
    code: `// 순차 실행 (느림)
async function sequentialFetch(userIds) {
  const users = [];
  for (const id of userIds) {
    const user = await fetchUser(id); // 순차 실행
    users.push(user);
  }
  return users;
}

// 병렬 실행 (빠름)
async function parallelFetch(userIds) {
  const promises = userIds.map(id => fetchUser(id));
  return Promise.all(promises); // 동시 실행
}

// 에러 처리가 포함된 병렬 실행
async function safeParallelFetch(userIds) {
  const results = await Promise.allSettled(
    userIds.map(id => fetchUser(id))
  );

  return results.reduce((acc, result, index) => {
    if (result.status === 'fulfilled') {
      acc.success.push(result.value);
    } else {
      acc.failed.push({ id: userIds[index], error: result.reason });
    }
    return acc;
  }, { success: [], failed: [] });
}

// 동시 실행 수 제한
async function limitedParallelFetch(userIds, limit = 3) {
  const results = [];
  for (let i = 0; i < userIds.length; i += limit) {
    const batch = userIds.slice(i, i + limit);
    const batchResults = await Promise.all(batch.map(fetchUser));
    results.push(...batchResults);
  }
  return results;
}`,
    author: 'shin_js',
    createdAt: '2025-03-15',
    likeCount: 31,
    reviewCount: 7,
    aiReviewed: true,
  },
]

export const dummyReviews: Review[] = [
  // Post 1 reviews
  {
    id: 1,
    postId: 1,
    content:
      '`filterChain.doFilter(request, response)` 호출 전에 예외 처리를 추가하는 것이 좋습니다. `ExpiredJwtException`이 발생할 경우 401 응답을 명시적으로 반환해야 합니다. 현재 코드는 예외가 그대로 전파될 수 있습니다.',
    isAi: true,
    author: '🤖 AI',
    createdAt: '2025-03-20',
    likeCount: 8,
  },
  {
    id: 2,
    postId: 1,
    content:
      'AI 리뷰에 동의합니다. 추가로 `SecurityContextHolder.clearContext()`를 finally 블록에서 호출하여 스레드 로컬 메모리 누수를 방지하는 것을 권장합니다.',
    isAi: false,
    author: 'choi_java',
    createdAt: '2025-03-20',
    likeCount: 5,
  },
  {
    id: 3,
    postId: 1,
    content:
      'tokenProvider.validateToken() 내부에서 이미 예외를 처리하나요? 만약 그렇다면 이중 처리가 될 수 있습니다. 전체 흐름을 확인해보세요.',
    isAi: false,
    author: 'park_spring',
    createdAt: '2025-03-21',
    likeCount: 3,
  },
  // Post 2 reviews
  {
    id: 4,
    postId: 2,
    content:
      '`options` 파라미터가 변경될 때 `fetchData`가 재실행되지 않습니다. `useCallback` 의존성 배열에 `options`를 추가하거나, `JSON.stringify(options)`를 사용하세요. 무한 루프를 주의해야 합니다.',
    isAi: true,
    author: '🤖 AI',
    createdAt: '2025-03-19',
    likeCount: 12,
  },
  {
    id: 5,
    postId: 2,
    content:
      '훌륭한 패턴입니다! AbortController를 추가하면 컴포넌트 언마운트 시 진행 중인 fetch 요청을 취소할 수 있어 메모리 누수를 방지할 수 있습니다.',
    isAi: false,
    author: 'kim_react',
    createdAt: '2025-03-19',
    likeCount: 7,
  },
  {
    id: 6,
    postId: 2,
    content:
      'SWR이나 React Query 같은 라이브러리를 고려해보셨나요? 캐싱, 재검증, 폴링 등 다양한 기능을 제공합니다.',
    isAi: false,
    author: 'lee_frontend',
    createdAt: '2025-03-20',
    likeCount: 4,
  },
  // Post 3 reviews
  {
    id: 7,
    postId: 3,
    content:
      '`scalar_one_or_none()` 사용은 적절합니다. 하지만 대량의 쿼리가 발생하는 경우 `selectinload` 또는 `joinedload`를 사용하여 N+1 문제를 방지하세요.',
    isAi: true,
    author: '🤖 AI',
    createdAt: '2025-03-18',
    likeCount: 6,
  },
  {
    id: 8,
    postId: 3,
    content:
      '커넥션 풀 설정도 추가하면 좋겠습니다. `pool_size`, `max_overflow` 파라미터를 `create_async_engine`에 전달하세요.',
    isAi: false,
    author: 'han_python',
    createdAt: '2025-03-18',
    likeCount: 4,
  },
  // Post 4 reviews
  {
    id: 9,
    postId: 4,
    content:
      'Worker Pool 구현이 잘 되어 있습니다. 다만 `context.Context`를 추가하여 취소 시그널을 처리하면 더욱 견고한 코드가 됩니다.',
    isAi: false,
    author: 'yoon_go',
    createdAt: '2025-03-17',
    likeCount: 5,
  },
  // Post 5 reviews
  {
    id: 10,
    postId: 5,
    content:
      '`Box<dyn std::error::Error>` 대신 `anyhow::Error`나 커스텀 에러 타입을 사용하는 것을 고려해보세요. 에러 컨텍스트를 더 풍부하게 제공할 수 있습니다.',
    isAi: true,
    author: '🤖 AI',
    createdAt: '2025-03-16',
    likeCount: 9,
  },
  {
    id: 11,
    postId: 5,
    content:
      '`thiserror` 크레이트로 커스텀 에러를 정의하면 매우 깔끔해집니다. 추천드립니다!',
    isAi: false,
    author: 'bae_rust',
    createdAt: '2025-03-16',
    likeCount: 6,
  },
  // Post 6 reviews
  {
    id: 12,
    postId: 6,
    content:
      '`limitedParallelFetch` 함수의 배치 처리 로직이 훌륭합니다. 하지만 배치 내에서 하나라도 실패하면 전체가 실패합니다. `Promise.allSettled`를 사용하는 것을 권장합니다.',
    isAi: true,
    author: '🤖 AI',
    createdAt: '2025-03-15',
    likeCount: 10,
  },
  {
    id: 13,
    postId: 6,
    content:
      '재시도 로직도 추가하면 완벽할 것 같습니다. 네트워크 에러 시 exponential backoff로 재시도하는 패턴을 적용해보세요.',
    isAi: false,
    author: 'oh_js',
    createdAt: '2025-03-15',
    likeCount: 3,
  },
]
